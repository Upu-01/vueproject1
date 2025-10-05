using Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Repo;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactsController : BaseController<Contacts>
    {
        public ContactsController(Repository<Contacts> repository, Repository<Image> fileRepo) : base(repository, fileRepo) { }
    }
}
