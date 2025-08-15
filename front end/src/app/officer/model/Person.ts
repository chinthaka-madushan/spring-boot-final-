export class Person {
    private id: number;
    private name: string;
    private address: string;
    private nic: string;
    private dob: string;
    private gender: 'Male' | 'FEMALE';
    private maritalStatus: 'MARRIED' | 'SINGLE';
    private email: string;
    private phoneNumber: string;
    private occupation: string;
    private salary: number;
    private diseased: 'DIABETES' | 'HEART_DISEASE' | 'CANCER' | 'PARALYSIS' | 'ASTHMA' | 'NONE';
    private familyRole: 'MOTHER' | 'FATHER' | 'SON' | 'DAUGHTER';
    private familyId:number;
    private isActive: boolean;

    constructor(
        id: number,
        name: string,
        address: string,
        nic: string,
        dob: string,
        gender: 'Male' | 'FEMALE',
        maritalStatus: 'MARRIED' | 'SINGLE',
        email: string,
        phoneNumber: string,
        occupation: string,
        salary: number,
        diseased: 'DIABETES' | 'HEART_DISEASE' | 'CANCER' | 'PARALYSIS' | 'ASTHMA' | 'NONE',
        familyRole: 'MOTHER' | 'FATHER' | 'SON' | 'DAUGHTER',
        familyId:number,
        isActive: boolean
    ) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.nic = nic;
        this.dob = dob;
        this.gender = gender;
        this.maritalStatus = maritalStatus;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.occupation = occupation;
        this.salary = salary;
        this.diseased = diseased;
        this.familyRole = familyRole;
        this.familyId=familyId;
        this.isActive = isActive;
    }
} 