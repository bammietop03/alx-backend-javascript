(()=>{var o=new(function(){function o(o){var r=o.firstName,t=o.lastName;this.firstName=r,this.lastName=t}return o.prototype.workOnHomework=function(){return"Currently working"},o.prototype.displayName=function(){return this.firstName},o}())({firstName:"John",lastName:"Doe"});console.log(o.workOnHomework()),console.log(o.displayName());var r=function(){function o(){}return o.prototype.workDirectorTasks=function(){return"Getting to director tasks"},o}(),t=function(){function o(){}return o.prototype.workTeacherTasks=function(){return"Getting to work"},o}();function n(o){return"number"==typeof o&&o<500?new t:new r}function e(o){return function(o){return void 0!==o.workDirectorTasks}(o)?o.workDirectorTasks():o.workTeacherTasks()}function i(o){if("Math"===o)return"Teaching Math";if("History"===o)return"Teaching History";throw new Error("Invalid subject")}console.log(e(n(200))),console.log(e(n(1e3))),console.log(i("Math")),console.log(i("History"))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiJNQWFBLElBbUJNQSxFQUFVLElBbkJoQixXQUlJLFdBQVksRyxJQUFFQyxFQUFTLFlBQUVDLEVBQVEsV0FDL0JDLEtBQUtGLFVBQVlBLEVBQ2pCRSxLQUFLRCxTQUFXQSxDQUNsQixDQVNKLE9BUEksWUFBQUUsZUFBQSxXQUNFLE1BQU8sbUJBQ1QsRUFFQSxZQUFBQyxZQUFBLFdBQ0UsT0FBT0YsS0FBS0YsU0FDZCxFQUNKLEVBaEJBLEdBbUJnQixDQUFpQixDQUFFQSxVQUFXLE9BQVFDLFNBQVUsUUFDaEVJLFFBQVFDLElBQUlQLEVBQVFJLGtCQUNwQkUsUUFBUUMsSUFBSVAsRUFBUUssZUFZcEIsOEJBSUEsUUFISSxZQUFBRyxrQkFBQSxXQUNFLE1BQU8sMkJBQ1QsRUFDSixFQUpBLEdBTUEsMEJBSUEsUUFISSxZQUFBQyxpQkFBQSxXQUNFLE1BQU8saUJBQ1QsRUFDSixFQUpBLEdBTUEsU0FBU0MsRUFBZUMsR0FDcEIsTUFBc0IsaUJBQVhBLEdBQXVCQSxFQUFTLElBQ2xDLElBQUlDLEVBRUosSUFBSUMsQ0FFakIsQ0FNQSxTQUFTQyxFQUFZQyxHQUNqQixPQUxKLFNBQW9CQSxHQUNoQixZQUFvREMsSUFBNUNELEVBQXNCUCxpQkFDbEMsQ0FHUVMsQ0FBV0YsR0FDTkEsRUFBU1Asb0JBRVRPLEVBQVNOLGtCQUV0QixDQVNBLFNBQVNTLEVBQVdDLEdBQ2xCLEdBQW1CLFNBQWZBLEVBQ0YsTUFBTyxnQkFDRixHQUFtQixZQUFmQSxFQUNULE1BQU8sbUJBRVAsTUFBTSxJQUFJQyxNQUFNLGtCQUVwQixDQWRBZCxRQUFRQyxJQUFJTyxFQUFZSixFQUFlLE9BQ3ZDSixRQUFRQyxJQUFJTyxFQUFZSixFQUFlLE9BZ0J2Q0osUUFBUUMsSUFBSVcsRUFBVyxTQUN2QlosUUFBUUMsSUFBSVcsRUFBVyxXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvLi9qcy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIERlZmluZSBpbnRlcmZhY2UgZm9yIHRoZSBjb25zdHJ1Y3RvclxyXG5pbnRlcmZhY2UgU3R1ZGVudENvbnN0cnVjdG9yIHtcclxuICAgIGZpcnN0TmFtZTogc3RyaW5nO1xyXG4gICAgbGFzdE5hbWU6IHN0cmluZztcclxufVxyXG4gIFxyXG4gIC8vIERlZmluZSBpbnRlcmZhY2UgZm9yIHRoZSBjbGFzc1xyXG5pbnRlcmZhY2UgU3R1ZGVudENsYXNzSW50ZXJmYWNlIHtcclxuICAgIHdvcmtPbkhvbWV3b3JrKCk6IHN0cmluZztcclxuICAgIGRpc3BsYXlOYW1lKCk6IHN0cmluZztcclxufVxyXG4gIFxyXG4gIC8vIEltcGxlbWVudCB0aGUgU3R1ZGVudENsYXNzXHJcbmNsYXNzIFN0dWRlbnRDbGFzcyBpbXBsZW1lbnRzIFN0dWRlbnRDbGFzc0ludGVyZmFjZSB7XHJcbiAgICBmaXJzdE5hbWU6IHN0cmluZztcclxuICAgIGxhc3ROYW1lOiBzdHJpbmc7XHJcbiAgXHJcbiAgICBjb25zdHJ1Y3Rvcih7IGZpcnN0TmFtZSwgbGFzdE5hbWUgfTogU3R1ZGVudENvbnN0cnVjdG9yKSB7XHJcbiAgICAgIHRoaXMuZmlyc3ROYW1lID0gZmlyc3ROYW1lO1xyXG4gICAgICB0aGlzLmxhc3ROYW1lID0gbGFzdE5hbWU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICB3b3JrT25Ib21ld29yaygpOiBzdHJpbmcge1xyXG4gICAgICByZXR1cm4gXCJDdXJyZW50bHkgd29ya2luZ1wiO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZGlzcGxheU5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZmlyc3ROYW1lO1xyXG4gICAgfVxyXG59XHJcbiAgXHJcbiAgLy8gVGVzdCB0aGUgU3R1ZGVudENsYXNzXHJcbmNvbnN0IHN0dWRlbnQgPSBuZXcgU3R1ZGVudENsYXNzKHsgZmlyc3ROYW1lOiBcIkpvaG5cIiwgbGFzdE5hbWU6IFwiRG9lXCIgfSk7XHJcbmNvbnNvbGUubG9nKHN0dWRlbnQud29ya09uSG9tZXdvcmsoKSk7XHJcbmNvbnNvbGUubG9nKHN0dWRlbnQuZGlzcGxheU5hbWUoKSk7XHJcbiAgXHJcbi8vIFRhc2sgNyAgXHJcbi8vIERlZmluZSB0eXBlIGd1YXJkc1xyXG5pbnRlcmZhY2UgRGlyZWN0b3JJbnRlcmZhY2Uge1xyXG4gICAgd29ya0RpcmVjdG9yVGFza3MoKTogc3RyaW5nO1xyXG59XHJcbiAgXHJcbmludGVyZmFjZSBUZWFjaGVySW50ZXJmYWNlIHtcclxuICAgIHdvcmtUZWFjaGVyVGFza3MoKTogc3RyaW5nO1xyXG59XHJcbiAgXHJcbmNsYXNzIERpcmVjdG9yIGltcGxlbWVudHMgRGlyZWN0b3JJbnRlcmZhY2Uge1xyXG4gICAgd29ya0RpcmVjdG9yVGFza3MoKTogc3RyaW5nIHtcclxuICAgICAgcmV0dXJuIFwiR2V0dGluZyB0byBkaXJlY3RvciB0YXNrc1wiO1xyXG4gICAgfVxyXG59XHJcbiAgXHJcbmNsYXNzIFRlYWNoZXIgaW1wbGVtZW50cyBUZWFjaGVySW50ZXJmYWNlIHtcclxuICAgIHdvcmtUZWFjaGVyVGFza3MoKTogc3RyaW5nIHtcclxuICAgICAgcmV0dXJuIFwiR2V0dGluZyB0byB3b3JrXCI7XHJcbiAgICB9XHJcbn1cclxuICBcclxuZnVuY3Rpb24gY3JlYXRlRW1wbG95ZWUoc2FsYXJ5OiBudW1iZXIgfCBzdHJpbmcpOiBEaXJlY3RvciB8IFRlYWNoZXIge1xyXG4gICAgaWYgKHR5cGVvZiBzYWxhcnkgPT09ICdudW1iZXInICYmIHNhbGFyeSA8IDUwMCkge1xyXG4gICAgICByZXR1cm4gbmV3IFRlYWNoZXIoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBuZXcgRGlyZWN0b3IoKTtcclxuICAgIH1cclxufVxyXG4gIFxyXG5mdW5jdGlvbiBpc0RpcmVjdG9yKGVtcGxveWVlOiBEaXJlY3RvciB8IFRlYWNoZXIpOiBlbXBsb3llZSBpcyBEaXJlY3RvciB7XHJcbiAgICByZXR1cm4gKGVtcGxveWVlIGFzIERpcmVjdG9yKS53b3JrRGlyZWN0b3JUYXNrcyAhPT0gdW5kZWZpbmVkO1xyXG59XHJcbiAgXHJcbmZ1bmN0aW9uIGV4ZWN1dGVXb3JrKGVtcGxveWVlOiBEaXJlY3RvciB8IFRlYWNoZXIpOiBzdHJpbmcge1xyXG4gICAgaWYgKGlzRGlyZWN0b3IoZW1wbG95ZWUpKSB7XHJcbiAgICAgIHJldHVybiBlbXBsb3llZS53b3JrRGlyZWN0b3JUYXNrcygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGVtcGxveWVlLndvcmtUZWFjaGVyVGFza3MoKTtcclxuICAgIH1cclxufVxyXG4gIFxyXG4gIC8vIFRlc3QgdGhlIGZ1bmN0aW9uc1xyXG5jb25zb2xlLmxvZyhleGVjdXRlV29yayhjcmVhdGVFbXBsb3llZSgyMDApKSk7XHJcbmNvbnNvbGUubG9nKGV4ZWN1dGVXb3JrKGNyZWF0ZUVtcGxveWVlKDEwMDApKSk7XHJcblxyXG4vLyBUYXNrIDhcclxudHlwZSBTdWJqZWN0cyA9ICdNYXRoJyB8ICdIaXN0b3J5JztcclxuXHJcbmZ1bmN0aW9uIHRlYWNoQ2xhc3ModG9kYXlDbGFzczogU3ViamVjdHMpOiBzdHJpbmcge1xyXG4gIGlmICh0b2RheUNsYXNzID09PSAnTWF0aCcpIHtcclxuICAgIHJldHVybiAnVGVhY2hpbmcgTWF0aCc7XHJcbiAgfSBlbHNlIGlmICh0b2RheUNsYXNzID09PSAnSGlzdG9yeScpIHtcclxuICAgIHJldHVybiAnVGVhY2hpbmcgSGlzdG9yeSc7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzdWJqZWN0Jyk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBUZXN0IHRoZSBmdW5jdGlvblxyXG5jb25zb2xlLmxvZyh0ZWFjaENsYXNzKCdNYXRoJykpO1xyXG5jb25zb2xlLmxvZyh0ZWFjaENsYXNzKCdIaXN0b3J5JykpO1xyXG4gICJdLCJuYW1lcyI6WyJzdHVkZW50IiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJ0aGlzIiwid29ya09uSG9tZXdvcmsiLCJkaXNwbGF5TmFtZSIsImNvbnNvbGUiLCJsb2ciLCJ3b3JrRGlyZWN0b3JUYXNrcyIsIndvcmtUZWFjaGVyVGFza3MiLCJjcmVhdGVFbXBsb3llZSIsInNhbGFyeSIsIlRlYWNoZXIiLCJEaXJlY3RvciIsImV4ZWN1dGVXb3JrIiwiZW1wbG95ZWUiLCJ1bmRlZmluZWQiLCJpc0RpcmVjdG9yIiwidGVhY2hDbGFzcyIsInRvZGF5Q2xhc3MiLCJFcnJvciJdLCJzb3VyY2VSb290IjoiIn0=