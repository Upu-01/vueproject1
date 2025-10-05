using Data;
using Microsoft.AspNetCore.Mvc;
using Repo; // ваш репозиторий

[ApiController]
[Route("api/[controller]")]
public class BaseController<T>(Repository<T> _repository, Repository<Image> _imgeRepo) : ControllerBase where T : BaseArticle
{

    [HttpGet]
    public ActionResult<IEnumerable<T>> GetAll()
    {
        return Ok(_repository.GetAll().ToList());
    }

    [HttpGet("{id}")]
    public ActionResult<T> GetById(long id)
    {
        var entity = _repository.Get(id);
        if (entity == null)
            return NotFound();

        return Ok(entity);
    }

    [HttpPost]
    public ActionResult Create([FromBody] T entity)
    {
        if (entity.Image != null)
            entity.Image = _imgeRepo.Get(entity.Image.Id);
        _repository.Insert(entity);
        return CreatedAtAction(nameof(GetById), new { id = entity.Id }, entity);
    }

    [HttpPut("{id}")]
    public ActionResult Update(long id, [FromBody] T entity)
    {
        if (id != entity.Id)
            return BadRequest();

        var existing = _repository.Get(id);
        if (existing == null)
            return NotFound();

        _repository.Update(entity);
        return NoContent();
    }

    [HttpDelete("{id}")]
    public ActionResult Delete(long id)
    {
        var entity = _repository.Get(id);
        if (entity == null)
            return NotFound();

        _repository.Delete(entity);
        return NoContent();
    }
}