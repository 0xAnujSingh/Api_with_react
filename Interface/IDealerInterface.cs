using Api_with_React.Model;

namespace Api_with_React.Interface
{
    public interface IDealerInterface
    {
        public List<DealerClass> GetAll();

        public DealerClass GetById(int DealerId);
        public void Insert(DealerClass dealer);
        public void  Update(DealerClass dealer, int DealerId);
        public void Delete(int DealerId);

    }
}
