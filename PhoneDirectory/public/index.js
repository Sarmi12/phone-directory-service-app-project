/**
 * Created by ABC on 12/15/2016.
 */
/*(function(){
    "use strict";

    angular.module('phone',[])
        .controller('phonectr',phoneDirectory);

    phoneDirectory.$inject = ['$http'];
    function phoneDirectory()
    {
        var vm = this;
        vm.Title = "Phone Directory";
        vm.PhoneDirectoryinfo = [];
        vm.GetPhone = getPhone;
        vm.addPhone = addPhone;
        vm.editPhone = editPhone;
        vm.deletePhone  = deletePhone;
        vm.updatePhone = updatePhone;
vm.phone =phone;
        getPhone();
        function getPhone()
        {
            $http.get('/getPhone').then(
                function(res){
                    vm.PhoneDirectoryinfo = res.data;
                },
                function(err){
                    console.log(err);
                }
            )
        }


    }
})();
    */
(function(){
    "use strict";
    angular.module("myApp",[])
        .controller("myCtrl", getInfo);

    getInfo.$inject = ['$http'];

    function getInfo($http){
        var vm = this;
        vm.infos=[];
        vm.add = add;
        vm.edit = edit;
        vm.update= update;
        vm.del= del;
        refresh();

        function add(){
            $http.post('/getinfo',vm.info).success(function(resp){
                console.log(resp);
                refresh();
            });
        }

        function refresh(){
            $http.get('/getinfo').then(function(res){
                vm.infos=res.data;
            })
            vm.info={};
        }

        function edit(id){
            console.log("Edit Id:" + id);
            $http.get('/getinfo/'+id).then(function(res){
                console.log(res.data);
                vm.info=res.data;
            });
        }

        function update(id){
            console.log("Update ID:" + id);
            $http.put('/getinfo/'+id, vm.info).success(function(resp) {
                refresh();
            });
        }
        function del(id){
            console.log("Delete ID:" + id);
            $http.delete('/getinfo/'+id).success(function(resp){
                refresh();
            });
        }

    }
})();
