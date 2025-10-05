using Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Repo;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AboutUsController : BaseController<AboutUs>
    {
        public AboutUsController(Repository<AboutUs> repository, Repository<Image> fileRepo) : base(repository, fileRepo) { }
    }
}
