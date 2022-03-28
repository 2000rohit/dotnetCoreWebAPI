using backend.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public UsersController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

      
        [HttpGet]
        public JsonResult Get()
        {
            MongoClient dbClient = new MongoClient(_configuration.GetConnectionString("UsersAppCon"));
            var dbList = dbClient.GetDatabase("mydb").GetCollection<Userdetail>("Userdetail").AsQueryable();
            return new JsonResult(dbList);
        }
     
        [HttpPost]
        public JsonResult Post(Userdetail user)
        {
            MongoClient dbClient = new MongoClient(_configuration.GetConnectionString("UsersAppCon"));
            int LastUserdetailId = dbClient.GetDatabase("mydb").GetCollection<Userdetail>("Userdetail").AsQueryable().Count();
            user.UserId = LastUserdetailId +1;
            dbClient.GetDatabase("mydb").GetCollection<Userdetail>("Userdetail").InsertOne(user);
            return new JsonResult("Added Successfully");
        }

        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            MongoClient dbClient = new MongoClient(_configuration.GetConnectionString("UsersAppCon"));
            var filter = Builders<Userdetail>.Filter.Eq("UserId", id);

            dbClient.GetDatabase("mydb").GetCollection<Userdetail>("Userdetail").DeleteOne(filter);
            return new JsonResult("Delete Successfully");
        }
    }
}
