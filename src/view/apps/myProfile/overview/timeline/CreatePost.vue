<template>
  <sdCreatePost>
    <BackShadow v-if="drawer" @click="() => setDrawer(false)" />
    <sdCards title="Post Something">
      <div @click="() => setDrawer(true)" class="postBody">
        <img class="post-author" :src="require('@/static/img/chat-author/t4.jpg')" alt="" />
        <a-textarea v-model:value="textValue" @change="onTextChange" placeholder="Write something..." />
      </div>
      <div @click="() => setDrawer(true)" class="postFooter">
        <div class="postFooter_left">
          <a-upload>
            <sdButton shape="circle" type="light">
              <img :src="require('@/static/img/icon/image.png')" alt="" />
              <span>Photo/Video</span>
            </sdButton>
          </a-upload>
          <sdButton class="btn-more" shape="circle" type="light">
            <sdFeatherIcons type="more-horizontal" />
          </sdButton>
        </div>
        <div class="postFooter_right">
          <sdButton v-if="drawer" class="btn-post" @click="onCreate" type="primary"> Publish Post </sdButton>
        </div>
      </div>
    </sdCards>
  </sdCreatePost>
</template>
<script>
import { computed, ref, defineComponent } from 'vue';
import { useStore } from 'vuex';
import { BackShadow } from './style';

const Post = defineComponent({
  name: 'Post',
  components: { BackShadow },
  setup() {
    const { state, dispatch } = useStore();
    const posts = computed(() => state.profile.posts);
    const drawer = ref(false);
    const textValue = ref('');

    const onCreate = () => {
      const arrayData = [];
      posts.value.map((data) => {
        return arrayData.push(data.postId);
      });
      const max = Math.max(...arrayData);
      if (textValue.value === '') {
        alert('Please input minimum content');
      } else {
        dispatch('submitPost', [
          ...posts.value,
          {
            postId: max + 1,
            from: 'David Warner',
            time: new Date().getTime(),
            img: ['static/img/profile/post/postImage.png'],
            author: 'static/img/chat-author/t4.jpg',
            content: textValue,
            like: 0,
            comment: [],
          },
        ]);
        textValue.value = '';
      }
      setTimeout(() => {
        drawer.value = false;
      }, 500);
    };

    const onTextChange = (e) => {
      return (textValue.value = e.target.value);
    };

    const setDrawer = (value) => {
      drawer.value = value;
    };

    return {
      setDrawer,
      posts,
      drawer,
      textValue,
      onTextChange,
      onCreate,
    };
  },
});

export default Post;
</script>
