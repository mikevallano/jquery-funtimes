require 'rails_helper'

RSpec.describe CrittersController, type: :controller do

  let(:critter) { create(:critter) }
  let(:invalid_critter) { build(:invalid_critter) }
  let(:valid_attributes) { attributes_for(:critter) }

  let(:invalid_attributes) { attributes_for(:invalid_critter) }

  describe "GET #index" do
    it "assigns all critters as @critters" do
      critter
      get :index, {}
      expect(assigns(:critters)).to eq([critter])
    end
  end

  describe "GET #show" do
    it "assigns the requested critter as @critter" do
      critter
      get :show, {:id => critter.to_param}
      expect(assigns(:critter)).to eq(critter)
    end
  end

  describe "GET #new" do
    it "assigns a new critter as @critter" do
      get :new, {}
      expect(assigns(:critter)).to be_a_new(Critter)
    end
  end

  describe "GET #edit" do
    it "assigns the requested critter as @critter" do
      critter = Critter.create! valid_attributes
      get :edit, {:id => critter.to_param}
      expect(assigns(:critter)).to eq(critter)
    end
  end

  describe "POST #create" do
    context "with valid params" do
      it "creates a new Critter" do
        expect {
          post :create, {:critter => valid_attributes}
        }.to change(Critter, :count).by(1)
      end

      it "assigns a newly created critter as @critter" do
        post :create, {:critter => valid_attributes}
        expect(assigns(:critter)).to be_a(Critter)
        expect(assigns(:critter)).to be_persisted
      end

      it "redirects to the created critter" do
        post :create, {:critter => valid_attributes}
        expect(response).to redirect_to(Critter.last)
      end
    end

    context "with invalid params" do
      it "assigns a newly created but unsaved critter as @critter" do
        post :create, {:critter => invalid_attributes}
        expect(assigns(:critter)).to be_a_new(Critter)
      end

      it "re-renders the 'new' template" do
        post :create, {:critter => invalid_attributes}
        expect(response).to render_template("new")
      end
    end
  end

  describe "PUT #update" do
    before { critter }
    context "with valid params" do

      it "updates the requested critter" do
        put :update, {:id => critter.to_param, critter: {name: 'newname', description: 'newdescription'}}
        critter.reload
        critter.name = "newname"
      end

      it "assigns the requested critter as @critter" do
        put :update, {:id => critter.to_param, :critter => valid_attributes}
        expect(assigns(:critter)).to eq(critter)
      end

      it "redirects to the critter" do
        put :update, {:id => critter.to_param, :critter => valid_attributes}
        expect(response).to redirect_to(critter)
      end
    end

    context "with invalid params" do
      it "assigns the critter as @critter" do
        put :update, {:id => critter.to_param, :critter => invalid_attributes}
        expect(assigns(:critter)).to eq(critter)
      end

      it "re-renders the 'edit' template" do
        put :update, {:id => critter.to_param, :critter => invalid_attributes}
        expect(response).to render_template("edit")
      end
    end
  end

  describe "DELETE #destroy" do
    before { critter }
    it "destroys the requested critter" do
      expect {
        delete :destroy, {:id => critter.to_param}
      }.to change(Critter, :count).by(-1)
    end

    it "redirects to the critters list" do
      delete :destroy, {:id => critter.to_param}
      expect(response).to redirect_to(critters_url)
    end
  end

end
