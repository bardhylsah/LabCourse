using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Configuration;
using System.Drawing;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;



namespace API.Controllers
{
    public partial class _Contact :System.Web.UI.Page
    {
        protected void btn_send(object sender, EventArgs a)
        {
            try{
                 var from ="youremail@gmail.com";
                 var to="youremail@gmail.com";
                 const string Password="YourPassword";
                 string mail_message="From" + txt_name.Text+"\n";
                 mail_message+="Email:" + txt_email.Text+"\n";
                 mail_message += "Message:" +txt_message.Text+ "\n";

                 var smtp=new SmtpClient();
                 {
                     smtp.Host=" smtp.gmail.com";
                     smtp.Port= 587;
                     smtp.EnableSsl=true;
                     smtp.DeliveryMethod= SmtpDeliveryMethod.Network;
                     smtp.Credentials= new NetworkCredential(from, Password);
                     smtp.Timeout= 20000;
                 }

                 smtp.Send(from, to, mail_message);

                 confirm.Text="Thank you for your email";

                 txt_name.Text="";
                 txt_email.Text="";
                 txt_message.Text="";
            }
            catch (Exception
            {
                confirm.Text="Something went wrong! Please try again";
                confirm.ForeColor= Color.Red;
            })
        }
    }
}