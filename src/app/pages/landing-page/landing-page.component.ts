import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { UserService } from "../../services/user/user.service";
import { User } from "src/app/models/user";
import { NgForm } from "@angular/forms";
import Swal from "sweetalert2";
import { Response } from "../../interfaces/response.interface";

@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.scss"]
})
export class LandingPageComponent implements OnInit {
  user: User;
  alertTitle = "Link Room";
  loading = false;
  eventId = 1;

  constructor(private userService: UserService) {}

  resetUserEvent() {
    this.user = new User(0, "", "", "", "", "", "", 0, 0);

    const name = document.getElementById("name");
    const surname = document.getElementById("surname");
    const emails = document.getElementById("email");
    const phone = document.getElementById("phone");
    const cargo = document.getElementById("Position");
    const website = document.getElementById("Website");

    name.parentNode["classList"].remove("avalide");
    surname.parentNode["classList"].remove("avalide");
    phone.parentNode["classList"].remove("avalide");
    emails.parentNode["classList"].remove("avalide");
    cargo["value"] = "";
    website["value"] = "";
    cargo.parentNode["classList"].remove("avalide");
    website.parentNode["classList"].remove("avalide");
  }

  ngOnInit(): void {
    this.resetUserEvent();
    const name = document.getElementById("name");
    const surname = document.getElementById("surname");
    const emails = document.getElementById("email");
    const phone = document.getElementById("phone");
    const cargo = document.getElementById("Position");
    const website = document.getElementById("Website");

    const expresion = /\w+@\w+\.+[a-z]/;
    const expresionUrl = /\w+\.+[a-z]/;

    // nombre
    name.addEventListener("blur", () => {
      if (name["value"] === "") {
        name.parentNode["classList"].remove("avalide");
        name.parentNode["classList"].remove("avalide");
      } else {
        name.parentNode["classList"].add("avalide");
      }
    });

    // apellidos
    surname.addEventListener("blur", () => {
      if (surname["value"] === "") {
        surname.parentNode["classList"].remove("avalide");
      } else {
        surname.parentNode["classList"].add("avalide");
      }
    });

    // telefono
    phone.addEventListener("blur", () => {
      if (phone["value"] === "") {
        phone.parentNode["classList"].remove("avalide");
      } else if (isNaN(phone["value"])) {
        name.parentNode["classList"].remove("avalide");
      } else {
        phone.parentNode["classList"].add("avalide");
      }
    });

    // correo
    emails.addEventListener("blur", () => {
      if (!expresion.test(emails["value"])) {
        console.log("el correo no es valido");
        emails.parentNode["classList"].remove("avalide");
        return false;
      } else {
        console.log("el correo es valido");
        emails.parentNode["classList"].add("avalide");
      }
    });

    // cargo
    cargo.addEventListener("blur", () => {
      if (cargo["value"] === "") {
        cargo.parentNode["classList"].remove("avalide");
        cargo.parentNode["classList"].remove("avalide");
      } else {
        cargo.parentNode["classList"].add("avalide");
      }
    });

    // website
    website.addEventListener("blur", () => {
      if (!expresionUrl.test(website["value"])) {
        console.log("la url no es valido");
        website.parentNode["classList"].remove("avalide");
        // return false;
      } else {
        console.log("la url es valido");
        website.parentNode["classList"].add("avalide");
      }
    });
  }

  registerToEvent(form: NgForm) {
    this.loading = true;
    this.user.username = "ue" + new Date().getTime();
    this.user.password = "testUser213";

    this.userService.registerUserToEvent(this.user, this.eventId).subscribe(
      (resp: Response) => {
        if (resp.success) {
          Swal.fire(
            this.alertTitle,
            "Your account has been created. A verification link has been sent. Please check your email.",
            "success"
          );
        } else {
          Swal.fire(this.alertTitle, resp.message, "warning");
        }
        this.loading = false;
      },
      err => {
        console.error(err);
        Swal.fire(this.alertTitle, err.message, "warning");
      },
      () => {
        this.resetUserEvent();
      }
    );
  }
}
