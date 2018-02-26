<template>
<div class="hello">

  <Basic></Basic>
  <WithLink/>
</div>
</template>

<script>
import graphql from '@/utils/graphql';
import gql from 'graphql-tag';

import Basic from '@/components/GraphqlBasic';
import WithLink from '@/components/GraphqlWithLink';
const number_of_repos = 3;
const query = gql `{
	viewer {
	    name
	     repositories(last: ${number_of_repos}) {
	       nodes {
	         name
	       }
	     }
	   }
}`;

export default {

  name: 'hello',
  data: function() {
    return {
      viewer: '',
    }
  },
  components: {
    Basic,
    WithLink
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
