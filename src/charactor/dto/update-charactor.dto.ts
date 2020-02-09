import mongoose from 'mongoose';

export class UpdateCharactorDto {
    id:  mongoose.Types.ObjectId
    readonly name: String;
    readonly cls: String;
    readonly race: String;
    readonly value: String;
    readonly school: String;
    readonly lvl: Number;

    // toDto() {
    //     const name = this.name ? {name : this.name}:{};
    //     const cls = this.cls ? {cls: this.cls}: {};
    //     const race = this.race ? {race: this.race} : {};
    //     const value = this.value ? {value: this.value} : {};
    //     const school = this.school ? {school: this.school}:{};
    //     const lvl = this.lvl ? {lvl: this.lvl}: {};
    //     return {...name, ...cls, ...race, ...value, ...school, lvl}
    // }
}