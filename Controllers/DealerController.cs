using Api_with_React.Interface;
using Api_with_React.Model;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Api_with_React.Controllers
{


    [Route("api/[controller]")]
    [ApiController]
    public class DealerController : ControllerBase
    {
        private readonly IDealerInterface _dealerInterface;
        public DealerController(IDealerInterface dealerInterface)
        {
            _dealerInterface = dealerInterface;
        }

        // GET: api/<DealerController>
        [HttpGet]
        public List<DealerClass> Get()
        {
            var dealer = _dealerInterface.GetAll();
            return dealer;
        }

        // GET api/<DealerController>/5
        [HttpGet("{id}")]
        public DealerClass Get(int id)
        {
            var dealer = _dealerInterface.GetById(id);
            return dealer;
        }

        // POST api/<DealerController>
        [HttpPost]
        public void Post([FromBody] DealerClass dealerClass)
        {
            _dealerInterface.Insert(dealerClass);
        }

        // PUT api/<DealerController>/5
        [HttpPut("{id}")]
        public void Put(DealerClass dealerClass, int id)
        {
            _dealerInterface.Update(dealerClass, id);
        }

        // DELETE api/<DealerController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _dealerInterface.Delete(id);
        }


    }
}
