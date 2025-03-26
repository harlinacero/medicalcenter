namespace MedicalCenterDomain.Repository
{
    /// <summary>
    /// Interface for the repository pattern
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public interface IRepository<T> where T : class
    {
        /// <summary>
        /// Create a new entity
        /// </summary>
        /// <param name="entity"></param>
        /// <returns></returns>
        public Task<T> CreateAsync(T entity);
        /// <summary>
        /// Update an entity
        /// </summary>
        /// <param name="entity"></param>
        /// <returns></returns>
        public Task<T> UpdateAsync(T entity);
        /// <summary>
        /// Delete an entity
        /// </summary>
        /// <param name="entity"></param>
        /// <returns></returns>
        public Task<T> DeleteAsync(T entity);
        /// <summary>
        /// Get an entity by id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public Task<T> GetByIdAsync(int id);
        /// <summary>
        /// Get an entity by name
        /// </summary>
        /// <param name="name"></param>
        /// <returns></returns>
        public Task<T> GetByParameterAsync(System.Linq.Expressions.Expression<Func<T, bool>> predicate);
        /// <summary>
        /// Get all entities
        /// </summary>
        /// <returns></returns>
        public Task<IEnumerable<T>> GetAllAsync();
    }
}
