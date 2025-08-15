import { Person } from "./person";

export class Family {
  private id:number;
  private numberOfMembers:number; 
  private incomeType:'LOW'|'MIDDLE'|'HIGH';
  private member: Person[];
  
  constructor(
    id:number,
    numberOfMembers:number,
    incomeType:'LOW'|'MIDDLE'|'HIGH',
    member: Person[]
  ){
    this.id=id;
    this.numberOfMembers=numberOfMembers;
    this.incomeType=incomeType;
    this.member=member;
  }

}