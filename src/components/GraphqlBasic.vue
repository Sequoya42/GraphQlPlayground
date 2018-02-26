<template>
<div>
  <h1>Graphql Basic</h1> {{viewer}}
</div>
</template>

<script>
import graphql from '@/utils/graphqlBasic';
import gql from 'graphql-tag';
import env from '../../.env';
const query = gql ` query ($number_of_repos:Int!){
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
  name: 'Basic',
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
      const res = await graphql.query({
        query,
        variables: {
          number_of_repos: 3
        },
        context: {
          headers: {
            Authorization: 'bearer ' + env.key
          }
        }
      })
      console.log(res.data.viewer);
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
