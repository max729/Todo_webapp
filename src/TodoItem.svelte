<script>

    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();
    
    function remove() {
		dispatch('remove', { id });
	}

    function toggleStatus2() {
        //console.log("checked")
        let newStatus = !complete;
		dispatch('toggle', {
           id,
           newStatus
        });
    }


	function toggleStatus() {
        //console.log("checked")
        let newStatus = complete;
		dispatch('toggle', {
           id,
           newStatus
        });
    }
    

    export let id; // document ID
    export let text ;
    export let complete;
</script>

<style>

</style>

<div class="p-2  border shadow" class:bg-success={complete} class:bg-opacity-25={complete}>
    <div class="row g-0">
        <div class="col-1">
            <input class="form-check-input rounded-circle" style="width: 1.3em; height: 1.3em;" type="checkbox" bind:checked={complete} on:change={toggleStatus} > 
        </div>
        
        <div class="col-10" on:click={toggleStatus2} on:keypress={toggleStatus2}>
            <span>{ text }</span>

        </div>

        <div class="col-1">
            <button type="button" class="btn-close btn-lg no-gutters" aria-label="Close"  on:click={remove}>  </button>
        </div>
    </div>
</div>
