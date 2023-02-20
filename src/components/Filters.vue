<template>
  <div id="filters">
    <h3>Filters</h3>
    <p
      v-for="(filter, index) in filters"
      :key="index"
      @click="applyFilter(filter)"
    >
      {{ filter.name }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filters: [
        {
          name: "Rating highest",
          key: "rating",
          order: "desc",
        },
        {
          name: "Rating lowest",
          key: "rating",
          order: "asc",
        },
        {
          name: "Year newest",
          key: "year",
          order: "desc",
        },
        {
          name: "Year oldest",
          key: "year",
          order: "asc",
        },
      ],
    };
  },
  methods: {
    applyFilter(filter) {
      this.$store.dispatch("filter", filter);
    },
  },
};
</script>

<style lang='scss' scoped>
#filters {
  text-align: left;
  color: rgb(143, 143, 143);
  cursor: pointer;

  h3 {
    border: none;
	color: rgb(143, 143, 143);
    border-radius: 10px;
    cursor: pointer;
    text-transform: uppercase;
    outline: none;
	margin-left: 10px;

  }

  p {
	margin-left: 10px;
	background-image: linear-gradient(
	  to right,
	  rgb(255, 255, 255),
	  rgb(255, 255, 255) 50%,
		rgb(143, 143, 143) 50%
	);
	background-size: 200% 100%;
	background-position: -100%;
	display: inline-block;
	padding: 5px 0;
	position: relative;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	transition: all 0.3s ease-in-out;
  }
  
  p:before{
	content: '';
	background: #ffffff;
	display: block;
	position: absolute;
	bottom: -3px;
	left: 0;
	width: 0;
	height: 3px;
	transition: all 0.3s ease-in-out;
  }
  
  p:hover {
   background-position: 0;
  }
  
  p:hover::before{
	width: 100%;
  }
}
</style>