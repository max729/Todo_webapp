<script>
    import TodoItem from './TodoItem.svelte';
    import { db } from './firebase';
    import { collection, query, where, getDocs, onSnapshot ,  orderBy , addDoc , deleteDoc , doc , updateDoc} from "firebase/firestore";
    //import { onMount } from 'svelte';
    import { onDestroy } from 'svelte';
    import { serverTimestamp } from "firebase/firestore";
    
    export let uid;
    let todos = [];
    let text = "";
/*
    onMount( async () => {

            const q = query(collection(db, 'todos'), where( 'uid', '==', uid) );


            const querySnapshot = await getDocs(q);

            querySnapshot.forEach((doc) => {
                todos=[...todos,doc.data()];
            // doc.data() is never undefined for query doc snapshots
            //console.log(doc.id, " => ", doc.data());
            });

    });
*/
    const q = query(collection(db, 'todos'), where( 'uid', '==', uid),orderBy("created") );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {

        todos=[];
    
        querySnapshot.forEach((doc) => {
            todos = [...todos,[doc.data(),doc.id] ];
            //todos.push([doc.data(),doc.id]);
        });
    });

    onDestroy(() => {
		unsubscribe();
	});

    async function  add() {
        
        try {
            const docRef = await addDoc(collection(db, "todos"), {
                uid, text, complete: false, created: serverTimestamp()
            });
        } catch (e) {
            console.error("Error adding document: ", e);
        }
        text = '';
    }
    
    function updateStatus(event) {
        const { id, newStatus } = event.detail;
        updateDoc(doc(db, "todos", id) ,{
            complete: newStatus
        });
    }
    
    function removeItem(event) {
        //console.log("delete");
        const { id } = event.detail;
        deleteDoc(doc(db, "todos", id));

    }

</script>

<style>
    input { display: block }
</style>


<div class="d-grid gap-3">

	{#each todos as todo }
        <TodoItem complete={todo[0].complete} text={todo[0].text} id={todo[1]}  on:remove={removeItem} on:toggle={updateStatus}/>
    {:else}
		<p>No Task ...</p> 
	{/each}

    <div class="row">
        <div class="col-12">
            <input placeholder="example Task"  class="form-control " style="margin: 10px auto;" bind:value={text}>
        </div>

        <div class="col">
            <button class="btn btn-primary" on:click={add}>Add Task</button>
        </div>
    </div>
</div>