<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-4 is-offset-4">
          <h2 class="title has-text-centered">
            Connexion
          </h2>

          <b-notification v-if="err" type="is-warning">
            {{ err }}
          </b-notification>

          <form method="post" @submit.prevent="login">
            <b-field label="Email" label-for="email">
              <b-input id="email" v-model="email" />
            </b-field>
            <b-field label="Password" label-for="password">
              <b-input
                id="password"
                v-model="password"
                type="password"
                password-reveal
              />
            </b-field>
            <div class="control">
              <button type="submit" class="button is-dark is-fullwidth">
                Se connecter
              </button>
            </div>
          </form>

          <div class="has-text-centered" style="margin-top: 20px">
            <p>
              Avez-vous un compte ?
              <nuxt-link to="/register">
                S'inscrire
              </nuxt-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>

export default {
    data () {
        return {
            email: "",
            password: "",
            err: ""
        };
    },
    methods: {
        async login () {
            try {
                await this.$auth.loginWith("local", {
                    data: {
                        email: this.email,
                        password: this.password
                    }
                });

                this.$router.push("/inspire");
            } catch (e) {
                this.err = e.response.data.message;
            }
        }
    }
};
</script>
