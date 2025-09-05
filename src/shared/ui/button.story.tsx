import { Button } from './button';

export default {
  title: 'Button',
};

export const Buttons = () => (
  <div className="flex flex-col gap-3">
    <section className="grid grid-cols-7 gap-3 w-[60rem] items-center">
      <p className="font-bold">Variant</p>
      <p className="font-bold">Default</p>
      <p className="font-bold">Hover</p>
      <p className="font-bold">Active</p>
      <p className="font-bold">Focus</p>
      <p className="font-bold">Disabled</p>
      <p className="font-bold">Loading</p>

      <p>Default</p>
      <Button>Кнопка</Button>
      <Button id="hover">Hover</Button>
      <Button id="active-hover">Clicked</Button>
      <Button id="focus">Focus</Button>
      <Button disabled>Disabled</Button>
      <Button loading>Loading</Button>
    </section>

    <section className="grid grid-cols-7 gap-3 w-[60rem] items-center">
      <p>Secondary</p>
      <Button variant="secondary">Кнопка</Button>
      <Button variant="secondary" id="hover">
        Hover
      </Button>
      <Button variant="secondary" id="active-hover">
        Clicked
      </Button>
      <Button variant="secondary" id="focus">
        Focus
      </Button>
      <Button variant="secondary" disabled>
        Disabled
      </Button>
      <Button variant="secondary" loading>
        Loading
      </Button>
    </section>

    <section className="grid grid-cols-7 gap-3 w-[60rem] items-center">
      <p>Outline</p>
      <Button variant="outline">Кнопка</Button>
      <Button variant="outline" id="hover">
        Hover
      </Button>
      <Button variant="outline" id="active-hover">
        Clicked
      </Button>
      <Button variant="outline" id="focus">
        Focus
      </Button>
      <Button variant="outline" disabled>
        Disabled
      </Button>
      <Button variant="outline" loading>
        Loading
      </Button>
    </section>

    <section className="grid grid-cols-7 gap-3 w-[60rem] items-center">
      <p>Link</p>
      <Button variant="link">Кнопка</Button>
      <Button variant="link" id="hover">
        Hover
      </Button>
      <Button variant="link" id="active-hover">
        Clicked
      </Button>
      <Button variant="link" id="focus">
        Focus
      </Button>
      <Button variant="link" disabled>
        Disabled
      </Button>
      <Button variant="link" loading>
        Loading
      </Button>
    </section>

    <section className="grid grid-cols-7 gap-3 w-[60rem] items-center">
      <p>Ghost</p>
      <Button variant="ghost">Кнопка</Button>
      <Button variant="ghost" id="hover">
        Hover
      </Button>
      <Button variant="ghost" id="active-hover">
        Clicked
      </Button>
      <Button variant="ghost" id="focus">
        Focus
      </Button>
      <Button variant="ghost" disabled>
        Disabled
      </Button>
      <Button variant="ghost" loading>
        Loading
      </Button>
    </section>
  </div>
);

Buttons.parameters = {
  pseudo: {
    focus: ['#focus'],
    hover: ['#hover', '#active-hover'],
    active: ['#active', '#active-hover'],
  },
};
