<script>
  import Profile from './Profile.svelte';
  import Todos from './Todos.svelte';
  import { auth, provider } from './firebase';
  import {signInWithPopup , signOut} from "firebase/auth";

  let user=null;

  function login() {
    signInWithPopup(auth, provider).then((result) => {
      user = result.user;
      //console.log('log in');
    }).catch((error) => {
      console.log(error.code);
    });
  }

  function logout(){

    signOut(auth).then(() => {
      // Sign-out successful.
      user=null;
      //console.log('log out')
    }).catch((error) => {
      console.log(error.code);
    });
  }

</script>

<main>

  {#if user}
    <div class="row">
      <div class="col mb-3">
        <button on:click={ logout } class="btn btn-primary float-end">Logout</button>
      </div>
    </div>
    
    <Profile displayName={user.displayName} uid={user.uid} photoURL={user.photoURL} />
    <hr>
    <Todos uid={user.uid}/>
  {:else}
    <h2> Firebase TodoList </h2>
    <button on:click={login} class="btn btn-primary">Signin with Google</button>
  {/if}

</main>



<style>



</style>
