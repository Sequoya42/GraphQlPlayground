<template>
<div>
	<!-- <h1>
		ici {{test}}
	</h1> -->
  <h1>VueApollo</h1>
	 {{viewer}}
	 <p>
		----------
	 </p>
<div v-for="star in stars">
	{{star[0]}} : {{star[1]}}
</div>
</div>
</template>

<script>
import {LastRepo, SearchStar} from '@/schemas/viewer.graphql';

export default {
  name: 'VueApollo',
  data: function() {
    return {
      viewer: '',
			stars: [],
			test: LastRepo
    }
  },
  mounted() {
		console.log(this.test)
	},
  apollo: {
    viewer: {
			query: LastRepo,
    variables: {
      number_of_repos: 3
    },
		result(data) {
			this.viewer = data.data.viewer.repositories.nodes.map(e => e.name)
		}
  },
	stars: {
		query: SearchStar,
		update(data) {
			return data.search.edges.map(e => [e.node.name, e.node.stargazers.totalCount])
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
