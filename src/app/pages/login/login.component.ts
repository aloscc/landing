import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth/auth.service";
import { TokenStorageService } from "../../services/auth/token-storage.service";
import { Credentials } from "../../interfaces/credentials.interface";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  form: Credentials = { username: "", password: "" };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = "";
  roles: string[] = [];
  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router
  ) {}

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
    // $(".message a").click(function() {
    //   $("form").animate({ height: "toggle", opacity: "toggle" }, "slow");
    // });
  }

  onSubmit() {
    this.authService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.data.access_token);
        // this.tokenStorage.saveUser(data);

        this.router.navigate(["/events"]);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        // this.roles = this.tokenStorage.getUser().roles;
        // this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage() {
    window.location.reload();
  }
}
