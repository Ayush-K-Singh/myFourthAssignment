import {InMemoryDbService} from 'angular-in-memory-web-api'

export class EmployeeDataService implements InMemoryDbService {
    constructor(){}

    createDb(){
        return {
            employee:[
                {code:10, firstName:"ayush", middleName:"kumar", lastName:"singh",contact:8077120489},
                {code:10, firstName:"ayush", middleName:"kumar", lastName:"singh",contact:8077120489},
                {code:10, firstName:"ayush", middleName:"kumar", lastName:"singh",contact:8077120489},
                {code:10, firstName:"ayush", middleName:"kumar", lastName:"singh",contact:8077120489},
                {code:10, firstName:"ayush", middleName:"kumar", lastName:"singh",contact:8077120489},
                {code:10, firstName:"ayush", middleName:"kumar", lastName:"singh",contact:8077120489},

            ]
        }
    }
}