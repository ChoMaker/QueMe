<template>
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="/src/assets/logo-removebg.png" alt="Logo" style="width: 91px; height: auto;">
            </a>
            <div>
                <button class="btn btn-outline-light severalbtn space" @click="router.push({ name: 'Home' })"
                    type="submit">Home</button>
                <button class="btn btn-outline-light severalbtn space" @click="router.push({ name: 'ClientHome' })"
                    type="submit">Profile</button>
                <button class="btn btn-outline-light severalbtn" @click="router.push({ name: 'Login' })"
                    type="submit">Logout</button>
            </div>
        </div>
    </nav>
</template>
<script></script>
<style scoped>
.severalbtn {
    border-radius: 20px;
    min-width: 110px;
}

.space {
    margin-right: 22px;
}
</style>