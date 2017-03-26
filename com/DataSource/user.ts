export interface IUser{
    id:number;
    name:string;
    username:string;
    email:string;
    address:IAddress;
    phone:string;
    website:string;
    company:ICompany;
    albums:IAlbum[];
}

export interface ICompany{
    name:string;
    catchPharse:string;
    bs:string;
}

export interface IAddress{
    street:string;
    suite:string;
    city:string;
    zipcode:string;
    geo:IGeo;
}

export interface IGeo{
    lat:string;
    lon:string;
}

export interface IAlbum{
    albumId:number;
    id:number;
    title:string;
    url:string;
    thumbnailUrl:string;
}