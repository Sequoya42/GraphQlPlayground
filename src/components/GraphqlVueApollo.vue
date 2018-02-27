<template>
<div>
	<!-- <h1>
		ici {{test}}
	</h1> -->
  <h1>VueApollo</h1>
	 {{viewer}}
</div>
</template>

<script>
import {LastRepo} from '@/schemas/viewer.graphql';

const query = ''
export default {
  name: 'VueApollo',
  data: function() {
    return {
      viewer: '',
			test: LastRepo
    }
  },
  mounted() {},
  apollo: {
    viewer: {
			query: LastRepo,
    variables: {
      number_of_repos: 3
    },
		update(data) {
			console.log(data)
			return data.viewer.repositories.nodes.map(e => e.name)
		}
  }
},
  methods: {}
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
