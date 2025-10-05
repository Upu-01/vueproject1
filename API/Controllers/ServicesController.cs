using Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Repo;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServicesController : BaseController<Services>
    {
        public ServicesController(Repository<Services> repository, Repository<Image> fileRepo) : base(repository, fileRepo) { }
    }
}
