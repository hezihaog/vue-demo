<template>
    <div>
        <h1>你好，Hello，{{name}}</h1>
        <el-radio v-model="radio" label="1">备选项1</el-radio>
        <el-radio v-model="radio" label="2">备选项2</el-radio>
    </div>
</template>

<script>
// export default导出一个Vue实例，所以这里可以写data、methods等
export default {
    data() {
        return {
            name: "张三",
            radio: "2"
        }
    }
}
</script>

<style lang="css">

</style>