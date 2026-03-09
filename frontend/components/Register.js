export default {
  data() {
    return {
      users: [],
      username: '',
      password: ''
    };
  },
  methods: {
    async registerUser() {
      if (!this.username || !this.password) {
        alert("Please fill all fields");
        return;
      }
      try {
        const res = await fetch('http://localhost:5000/api/auth/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username: this.username, password: this.password })
        });
        const data = await res.json();
        alert(data.message);
      } catch (err) {
        console.error(err);
        alert("Error registering user.");
      }
    }
  },
  template: `
    <div style="padding:20px;text-align:center;">
      <h2>Register User</h2>
      <input type="text" v-model="username" placeholder="Username"/>
      <input type="password" v-model="password" placeholder="Password"/>
      <button @click="registerUser">Register</button>
    </div>
  `
};

