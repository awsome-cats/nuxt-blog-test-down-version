<template>
  <form @submit.prevent="onSave">
    <!---- slot ---->
    <AppControlInput v-model="editPost.author">
      作者名
    </AppControlInput>
    <AppControlInput v-model="editPost.title">
      タイトル
    </AppControlInput>
    <AppControlInput v-model="editPost.thumbnail">
      サムネイルリンク
    </AppControlInput>
    <AppControlInput v-model="editPost.content" control-type="textarea">
      コンテント
    </AppControlInput>
    <AppControlInput v-model="editPost.previewText" control-type="textarea">
      プレビュー
    </AppControlInput>
    <AppButton type="submit">
      save
    </AppButton>

    <AppButton
      type="button"
      style="margin-left: 10px;"
      btn-style="cancel"
      @click="onCancel"
    >
      キャンセル
    </AppButton>
  </form>
</template>

<script>
import AppButton from '~/components/UI/AppButton'
import AppControlInput from '~/components/UI/AppControlInput'


export default {
  components: {
    AppButton,
    AppControlInput
  },
  props: {
    post: {
      type: Object,
      required: false
    }
  },
  data () {
    return {
      editPost: this.post ? { ...this.post } : {
        author: '',
        title: '',
        thumbnail: '',
        content: '',
        previewText: ''
      }
    }
  },
  methods: {
    onSave () {
     this.$emit('submit', this.editPost)
    },
    onCancel () {
      this.$router.push('/')
    }
  }

}
</script>

<style>

</style>
