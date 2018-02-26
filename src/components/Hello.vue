<template>
<div>
  <Basic/>
  <WithLink/>
  <VueApollo/>
</div>
</template>

<script>
import graphql from '@/utils/graphql';
import gql from 'graphql-tag';

import Basic from '@/components/GraphqlBasic';
import WithLink from '@/components/GraphqlWithLink';
import VueApollo from '@/components/GraphqlVueApollo';
export default {

  name: 'hello',
  data: function() {
    return {
      viewer: '',
    }
  },
  components: {
    Basic,
    WithLink,
    VueApollo
  }
}
</script>

<style>
</style>
