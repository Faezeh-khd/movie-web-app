<template>
  <div id="navbar-wrap" class="card-shadow">
    <div id="navbar">
      <h2 @click="$router.push('/')">Movie.io</h2>
      <div v-if="$route.path == '/'">
        <input v-model="search" type="text" placeholder="Find Movie..." />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
    };
  },
  watch: {
    search() {
      this.$store.dispatch("search", this.search);
    },
  },
};
</script>

<style lang="scss" scoped>
#navbar-wrap {
  position: fixed;
  width: 100%;
  z-index: 9999;

  #navbar {
    display: flex;
    padding: 15px;
    justify-content: space-between;
    background-color: rgb(226, 29, 29);

    h2 {
      margin: 0 1rem 0 0;
      color: white;
      cursor: pointer;
      transition: 0.3s;
    }

    h2:hover {
      color: rgb(28, 23, 23);
    }

    & > div {
      display: flex;
      flex-grow: 2;
      justify-content: flex-end;

      input {
        width: 20%;
        border: none;
        height: 25px;
        border-radius: 10px;
        box-sizing: border-box;
        outline: none;
        padding: 5px;
      }
    }
  }
}
</style>
