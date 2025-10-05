using Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Repo;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FileController(Repository<Image> imgRepo) : ControllerBase
    {
        [HttpGet]
        public IActionResult Get(int id)
        {
            var img = imgRepo.Get(id);
            if (img == null) return NotFound();
            return File(img.ImageData, img.ContentType);
        }
        [HttpPost]
        [Consumes("multipart/form-data")]
        public int Create(IFormFile file)
        {
            Image img = new Image() { ContentType = file.ContentType };
            using (var ms = new MemoryStream())
            {
                file.OpenReadStream().CopyTo(ms);
                img.ImageData = ms.ToArray();
            }
            imgRepo.Insert(img);
            return img.Id;
        }
        [HttpDelete]
        public IActionResult Delete(int id)
        {
            var img = imgRepo.Get(id);
            if (img == null) return NotFound();
            imgRepo.Delete(img);
            return Ok();
        }
        [HttpGet("index")]
        public IEnumerable<int> Index() => imgRepo.GetAll().ToList().Select(s=>s.Id);
    }
}
