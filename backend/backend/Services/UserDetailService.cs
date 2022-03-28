using backend.Model;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Services
{
    public class UserDetailService : IUserDetailService
    {
        private readonly IMongoCollection<Userdetail> _Userdetail;

        public UserDetailService(IUserStoreDatabaseSettings settings,IMongoClient mongoClient)
        {
            var database = mongoClient.GetDatabase(settings.DatabaseName);
            _Userdetail = database.GetCollection<Userdetail>(settings.UserCollectionDetail);

        }
        public Userdetail Create(Userdetail Userdetail)
        {
            _Userdetail.InsertOne(Userdetail);
            return Userdetail;
        }

        public List<Userdetail> Get()
        {
           return  _Userdetail.Find(Userdetail=>true).ToList();
        }

        public Userdetail Get(string id)
        {
            return _Userdetail.Find(Userdetail =>Userdetail.Id == id).FirstOrDefault();
        }

        public void Remove(string id)
        {
            _Userdetail.DeleteOne(Userdetail => Userdetail.Id == id);
        }

        public void Update(string id, Userdetail Userdetail)
        {
            _Userdetail.ReplaceOne(Userdetail => Userdetail.Id == id,Userdetail);
        }
    }
}


// https://www.youtube.com/watch?v=iWTdJ1IYGtg
//ASP.NET Core 6 REST API Tutorial | MongoDB Database
