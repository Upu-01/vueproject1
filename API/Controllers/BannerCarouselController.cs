using Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Repo;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BannerCarouselController : BaseController<BannerCarusel>
    {
        public BannerCarouselController(Repository<BannerCarusel> repository, Repository<Image> fileRepo) : base(repository, fileRepo) { }
    }
}
