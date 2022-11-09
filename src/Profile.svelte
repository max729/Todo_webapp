<script>
  export let displayName;
  export let photoURL;
  export let uid;
</script>

<div class="card " >
  <div class="row g-0">
    <div class="col-md-4">
      <img class = "rounded-circle img-fluid" src={ photoURL } width="100" alt="user avatar">
    </div>

    <div class="col-md-8">
      <div class="card-body">
          <h3 class="card-title">Hi { displayName }!  </h3>

          <p class="card-text"> userID: <br> { uid }</p>
      </div>
    </div>
  </div>
</div>
