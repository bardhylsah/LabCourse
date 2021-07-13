namespace API.Controllers
{
    public class SendEmail :IEmailSender
    {

        public async Task SendEmailAsync(string email, string subject, string htmlMessage)
        {
            using(MailMessage mailMessage= new MailMessage())
            {
                mailMessage.From=new MailMessage("");
                mailMessage.Subject= subject;
                mailMessage.Body=htmlMessage;   
                mailMessage.IsBodyHtml=true;
                mailMessage.To.Add(new MailAddress(email));
                SmtpClient smtp= new SmtpClient();
                smtp.Host="smtp.gmail.com";
                smtp.EnableSsl=true;    
                System.Net.NetworkCredential NetworkCred =new System.Net.NetworkCredential();
                NetworkCred.UserName="";
                NetworkCred.Password="";
                smtp.UseDefaultCredentials=true;
                smtp.Credentials=NetworkCred;
                smtp.Port=25;
                await smtp.SendMailAsync(mailMessage);
            }
        }
        
    }
}