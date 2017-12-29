import { inject, Lazy } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { Service } from './service';


@inject(Router, Service)
export class Confirm {
    hasCancel = true;
    hasSave = true;

    constructor(router, service) {
        this.router = router;
        this.service = service;
    }

    bind() {
        this.error = {};
    }

    async activate(params) {
        var id = params.id;
        this.data = await this.service.getById(id);
    }

    cancel(event) {
        this.router.navigateToRoute('view', { id: this.data._id });
    }

    save(event) {
        var conf=[];
        this.data.type='confirm';
        var warn='';
        if(this.data.items){
            if(this.data.items.length>0){
                var warning=[];
                for(var item of this.data.items){
                    var today=new Date();
                    item._createdDate=item._createdDate? new Date(item._createdDate): '';
                    if(item._createdDate!='' && item._createdDate.getFullYear()>1900){
                        today=new Date(item._createdDate);
                    }
                    var a = new Date(item.deliveryDate);
                    var b = today;
                    var diff=a.getTime() - b.getTime();
                    var timeDiff = Math.abs(a.getTime() - b.getTime());
                    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
                    if(diffDays>=0 && diffDays<=45){
                        warning.push('Comodity '+item.masterPlanComodity.name+' kurang '+ diffDays +' hari dari Tanggal Pengiriman\n');
                        
                    }
                }
                
                if(warning.length>0){
                        if (confirm('Tanggal Confirm <= 45 hari \n' + warning.toString() +' Tetap Confirm?')) {
                            this.service.update(this.data)
                                .then(result => {
                                    alert("Data Confirmed");
                                    this.cancel();
                                }).catch(e => {
                                    this.error = e;
                                });
                        } else {
                            this.cancel();
                        }
                    
                }
                else{
                    this.service.update(this.data).then(result => {
                        this.cancel();
                    }).catch(e => {
                        this.error = e;
                    })
                }
            }
        }
        else{
            this.service.update(this.data).then(result => {
                this.cancel();
            }).catch(e => {
                this.error = e;
            })
        }
        
    }
    
}