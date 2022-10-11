import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";


@Component({
    selector: 'app-fileupload',
    templateUrl: './fileupload.component.html',
  })

export class FileUploadComponent implements OnInit{

    selectedFile: File | undefined;
    constructor(private http: HttpClient){}


    ngOnInit(): void {
        
    }

    onFileSelected(event: any){
        console.log(event.target.files[0]);
        this.selectedFile=<File>event.target.files[0];
    }

    onUpload(){
        const fileData=new FormData();
        fileData.append('file', <File>this.selectedFile, this.selectedFile?.name)
        this.http.post('https://localhost:44318/api/values', fileData)
        .subscribe(res => {
            console.log(res);
        });
    
    }
}