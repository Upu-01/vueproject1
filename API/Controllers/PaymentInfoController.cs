using Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Repo;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentInfoController : BaseController<PaymentInfo>
    {
        public PaymentInfoController(Repository<PaymentInfo> repository, Repository<Image> fileRepo) : base(repository, fileRepo) { }
    }
}
