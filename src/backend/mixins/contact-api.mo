import Types "../types/contact";
import ContactLib "../lib/contact";
import List "mo:core/List";

mixin (
  submissions : List.List<Types.ContactSubmission>,
) {
  var nextId : Nat = 0;

  public func submitContact(req : Types.SubmitContactRequest) : async Types.SubmitContactResult {
    switch (ContactLib.validate(req)) {
      case (?errMsg) { #err(errMsg) };
      case null {
        let id = ContactLib.submit(submissions, nextId, req);
        nextId += 1;
        #ok(id);
      };
    };
  };

  public query func getContactSubmissions() : async [Types.ContactSubmission] {
    ContactLib.getAll(submissions);
  };
};
