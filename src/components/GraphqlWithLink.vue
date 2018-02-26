<template>
<div>
  <h1>Graphql with link</h1> {{viewer}}
</div>
</template>

<script>
import graphql from '@/utils/graphql';
import gql from 'graphql-tag';
const query = gql `query($number_of_repos:Int!){
	viewer {
	    name
	     repositories(last: $number_of_repos) {
	       nodes {
	         name
	       }
	     }
	   }
}`;

export default {
  name: 'WithLink',
  data: function() {
    return {
      viewer: '',
    }
  },
  mounted() {
    this.testGraphql();
  },

  methods: {
    async testGraphql() {
      const res = await
      graphql.query({
        query,
        variables: {
          number_of_repos: 3
        }
      })
      this.viewer = res.data.viewer.repositories.nodes.map(e => e.name);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
