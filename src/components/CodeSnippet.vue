  <template>
<div>
<pre>
<code>
	<slot>
		Code should go here, from the parent
	</slot>
</code>
</pre>
</div>
</template>

<script>
// import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'CodeSnippet',

  data: function() {
    return {}
  },
  computed: {},
  methods: {},
  components: {},
}
</script>

<style scoped>
pre {
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -o-pre-wrap;
  word-wrap: break-word;
}

code {
  font-family: Courier, 'New Courier', monospace;
  font-size: 12px;
}
</style>
