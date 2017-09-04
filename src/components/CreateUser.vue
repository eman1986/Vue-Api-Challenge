<template>
    <div class="card">
        <div class="card-content">
            <p class="title">
                Create User
            </p>
            <div class="field">
                <label for="FirstName" class="label">First Name</label>
                <div class="control">
                    <input v-validate="'required|alpha'" v-model="FirstName" type="text" name="FirstName" id="FirstName" class="input" :class="{'input': true, 'is-danger': errors.has('FirstName') }" />
                    <span v-show="errors.has('FirstName')" class="help is-danger">{{ errors.first('FirstName') }}</span>
                </div>
            </div>
            <div class="field">
                <label for="LastName" class="label">Last Name</label>
                <div class="control">
                    <input v-validate="'required|alpha'" v-model="LastName" type="text" name="LastName" id="LastName" class="input" :class="{'input': true, 'is-danger': errors.has('LastName') }" />
                    <span v-show="errors.has('LastName')" class="help is-danger">{{ errors.first('LastName') }}</span>
                </div>
            </div>
            <div class="field">
                <label for="EmployeeId" class="label">Employee ID</label>
                <div class="control">
                    <input v-validate="'required|alpha_num'" v-model="EmployeeId" type="text" name="EmployeeId" id="EmployeeId" class="input" :class="{'input': true, 'is-danger': errors.has('EmployeeId') }" />
                    <span v-show="errors.has('EmployeeId')" class="help is-danger">{{ errors.first('EmployeeId') }}</span>
                </div>
            </div>
            <div class="field">
                <label for="Department" class="label">Department</label>
                <div class="control">
                    <input v-validate="'required|alpha_num'" v-model="Department" type="text" name="Department" id="Department" class="input" :class="{'input': true, 'is-danger': errors.has('Department') }" />
                    <span v-show="errors.has('Department')" class="help is-danger">{{ errors.first('Department') }}</span>
                </div>
            </div>
            <div class="control">
                <button type="button" v-on:click="sendForm" class="button is-primary">Create User</button>
                &nbsp;
                <router-link :to="{ name: 'Home' }" class="button is-danger">Cancel</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                FirstName: '',
                LastName: '',
                EmployeeId: '',
                Department: ''
            };
        },
        methods: {
            sendForm()
            {
                this.$validator.validateAll().then((result) =>
                {
                    if (result)
                    {
                        let user = {
                            firstName: this.FirstName,
                            lastName: this.LastName,
                            employeeId: this.EmployeeId,
                            department: this.Department
                        };

                        this.$store.dispatch('CreateUser', user);

                        this.$router.replace('/');
                    }
                });
            }
        }
    };
</script>