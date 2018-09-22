import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  requestJson(url, callback) {
    $.ajax({
      url: url,
      complete: function(xhr) {
        callback.call(null, xhr.responseJSON)
      }
    });
  }

  request() {
    $('#ghapidata').html('<div id="loader"> <img src="../../../assets/img/ajax_loading.gif"> </div>');
    let username = $('#ghusername').val();
    let user   = 'https://api.github.com/users/'+username;
    let repos  = 'https://api.github.com/users/'+username+'/repos';

    this.requestJson(user, function(json){
      if(json.message == "Not Found" || username == '') {
        $('#ghapidata').html('<h1>Nothing is here</h1>');
      } else {
        let fullname     = json.name;
        let username     = json.login;
        let aviurl       = json.avatar_url;
        var profileurl   = json.html_url;
        let location     = json.location;
        let followersnum = json.followers;
        let followingnum = json.following;
        let reposnum     = json.public_repos;
        
        if(fullname == undefined) { fullname = username; }

        let outhtml = '<h2>'+fullname+' <span class="smallname">(@<a href="'+profileurl+'" target="_blank">'+username+'</a>)</span></h2>';
        outhtml = outhtml + '<div class="ghcontent"><div class="avi"><a href="'+profileurl+'" target="_blank"><img src="'+aviurl+'" width="80" height="80" alt="'+username+'"></a></div>';
        outhtml = outhtml + '<p>Followers: '+followersnum+' - Following: '+followingnum+'<br>Repos: '+reposnum+'</p></div>';
        outhtml = outhtml + '<div class="repolist clearfix">';

        let repositories;
        $.getJSON(repos, (json) => {
          repositories = json;   
          if(repositories.length == 0) { outhtml = outhtml + '<p>No repos!</p></div>'; }
          else {
            outhtml = outhtml + '<p><strong>Repos List:</strong></p> <ul>';
            $.each(repositories, function(index) {
              outhtml = outhtml + '<li><a href="'+repositories[index].html_url+'" target="_blank">'+repositories[index].name + '</a></li>';
            });
            outhtml = outhtml + '</ul></div>'; 
          }
          $('#ghapidata').html(outhtml);
        });
      }
    });
  };

}
