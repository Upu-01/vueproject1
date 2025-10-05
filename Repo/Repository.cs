using Data;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

namespace Repo
{
    public class Repository<T> where T : BaseEntity
    {
        private protected readonly ApplicationContext _context;
        private protected DbSet<T> entities;
        private string errorMessage = string.Empty;

        public Repository(ApplicationContext context)
        {
            _context = context;
            entities = context.Set<T>();
        }
        public IEnumerable<T> GetAll()
        {
            return entities.AsEnumerable();
        }
        public IQueryable<T> FindByCondition(Expression<Func<T, bool>> expression)
        {
            return entities.Where(expression);
        }
        public T? Get(long id)
        {
            return entities.SingleOrDefault(s => s.Id == id);
        }
        public void Insert(T entity)
        {
            ArgumentNullException.ThrowIfNull(entity);
            entities.Add(entity);
            _context.SaveChanges();
        }
        public void Update(T entity)
        {
            ArgumentNullException.ThrowIfNull(entity);
            if (entity.Id == 0)
                Insert(entity);
            else
                //context.Update(entity);
                _context.SaveChanges();
        }
        public void Delete(T entity)
        {
            ArgumentNullException.ThrowIfNull(entity);
            entities.Remove(entity);
            _context.SaveChanges();
        }
        public void Remove(T entity)
        {
            ArgumentNullException.ThrowIfNull(entity);
            entities.Remove(entity);
        }
        public void SaveChanges()
        {
            _context.SaveChanges();
        }
        public void InsertRange(List<T> entity)
        {
            ArgumentNullException.ThrowIfNull(entity);
            _context.AddRange(entity);
            _context.SaveChanges();
        }
        public void DeleteRange(List<T> entity)
        {
            ArgumentNullException.ThrowIfNull(entity);
            _context.RemoveRange(entity);
            _context.SaveChanges();
        }
        public void UpdateRange(List<T> entity)
        {
            ArgumentNullException.ThrowIfNull(entity);
            _context.UpdateRange(entity);
            _context.SaveChanges();
        }
    }
}
