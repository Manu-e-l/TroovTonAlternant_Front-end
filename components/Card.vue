<template>
  <div>
    <p />
  </div>
</template>

<script>
export default {
    name: "BuefyCard",
    props: {
        title: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true
        }
    }
};
</script>
