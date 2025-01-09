
import mongoose,{Schema, Document} from "mongoose"


//Interface TypeScript'in veri tiplerini denetlemesini sağlar. req.body ile aynı olması gerekiyor userRouterdeki gibi
export interface IUser extends Document{
    firstName:string;
    lastName:string;
    email:string;
    password:string;
}
//veritabana veriler eklemek için
const userSchema = new Schema<IUser>({
    firstName:{type:String, required:true},
    lastName:{type:String, required:true},
    email:{type:String, required:true},
    password:{type:String, required:true},
})


//mongoose.model<IUser>('User', userSchema):

//mongoose.model fonksiyonu ile 'User' adında bir model oluşturuluyor.
//IUser tipi, TypeScript tip denetimi için kullanılır.
//userSchema, MongoDB koleksiyonunun yapısını tanımlar.
//'User' model ismi, MongoDB koleksiyonunun ismi olarak kullanılır (çoğul ve küçük harflerle 'users' olarak kaydedilir).

const userModel = mongoose.model<IUser>('User', userSchema);

export default userModel;