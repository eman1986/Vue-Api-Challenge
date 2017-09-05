<template>
    <div class="card">
        <div class="card-content">
            <p class="title">
                Update User
            </p>
            <div class="field">
                <label for="FirstName" class="label">First Name</label>
                <div class="control">
                    <input v-validate="'required|alpha'" v-model="form.firstName" type="text" name="FirstName" id="FirstName" :class="{'input': true, 'is-danger': errors.has('FirstName') }" />
                    <span v-show="errors.has('FirstName')" class="help is-danger">{{ errors.first('FirstName') }}</span>
                </div>
            </div>
            <div class="field">
                <label for="LastName" class="label">Last Name</label>
                <div class="control">
                    <input v-validate="'required|alpha'" v-model="form.lastName" type="text" name="LastName" id="LastName" :class="{'input': true, 'is-danger': errors.has('LastName') }" />
                    <span v-show="errors.has('LastName')" class="help is-danger">{{ errors.first('LastName') }}</span>
                </div>
            </div>
            <div class="field">
                <label for="EmployeeId" class="label">Employee ID</label>
                <div class="control">
                    <input v-validate="'required|alpha_num'" v-model="form.employeeId" type="text" name="EmployeeId" id="EmployeeId" :class="{'input': true, 'is-danger': errors.has('EmployeeId') }" />
                    <span v-show="errors.has('EmployeeId')" class="help is-danger">{{ errors.first('EmployeeId') }}</span>
                </div>
            </div>
            <div class="field">
                <label for="Department" class="label">Department</label>
                <div class="control">
                    <input v-validate="'required|alpha_num'" v-model="form.department" type="text" name="Department" id="Department" :class="{'input': true, 'is-danger': errors.has('Department') }" />
                    <span v-show="errors.has('Department')" class="help is-danger">{{ errors.first('Department') }}</span>
                </div>
            </div>
            <div class="control">
                <input type="hidden" v-model="form.id" name="id" />
                <button type="button" v-on:click="sendForm" class="button is-primary">Update User</button>
                &nbsp;
                <router-link :to="{ name: 'Home' }" class="button is-danger">Cancel</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default
    {
        data()
        {
            return {
                form: {}
            };
        },
        watch: {
            getUserDetails (newData)
            {
                this.form = Object.assign({}, newData);
            }
        },
        computed: mapGetters([
            'getUserDetails'
        ]),
        created: function() {
            this.$store.dispatch('GetUserById', this.$route.params.id);
        },
        methods:
            {
                sendForm()
                {
                    this.$validator.validateAll().then((result) => {
                        if (result)
                        {
                            let user = {
                                id: this.form.id,
                                firstName: this.form.firstName,
                                lastName: this.form.lastName,
                                employeeId: this.form.employeeId,
                                department: this.form.department
                            };

                            this.$store.dispatch('SaveUser', user);

                            this.$router.replace('/');
                        }
                    });
                }
            }
    };
</script>