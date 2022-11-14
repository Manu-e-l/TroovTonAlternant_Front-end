<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-4 is-offset-4">
          <h2 class="title has-text-centered">
            Inscription
          </h2>

          <b-notification v-if="error" type="is-warning">
            {{ error }}
          </b-notification>

          <form method="post" @submit.prevent="register">
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
            <b-field
              label="Confirmation du password"
              label-for="password_confirm"
            >
              <b-input
                id="password_confirm"
                v-model="password_confirm"
                type="password"
                password-reveal
              />
            </b-field>
            <div class="control">
              <button type="submit" class="button is-dark is-fullwidth">
                Valider mon inscription
              </button>
            </div>
          </form>

          <div class="has-text-centered" style="margin-top: 20px">
            <p>
              Avez-vous déjà un compte ?
              <nuxt-link to="/login">
                Connexion
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
            username: "",
            email: "",
            password: "",
            password_confirm: "",
            error: ""
        };
    },
    methods: {
        async register () {
            if (this.password === this.password_confirm) {
                try {
                    // Enregistrement de l'utilisateur
                    await this.$axios.post("/users/register", {
                        email: this.email,
                        password: this.password
                    });

                    // Connexion immédiate
                    await this.$auth.loginWith("local", {
                        data: {
                            email: this.email,
                            password: this.password
                        }
                    });

                    this.$router.push("/inspire");
                } catch (e) {
                    this.error = e.response.data.message;
                }
            } else {
                this.error = "Le mot de passe ne correspond pas";
            }
        }
    }
};
</script>
