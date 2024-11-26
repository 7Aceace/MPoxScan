export const skinLesionData = {
    monkeypox: {
      id: 'monkeypox',
      title: 'Monkeypox',
      image: require('../../assets/images/monkeypox.jpg'),
      about: 'Monkeypox is a contagious viral infection that causes distinct skin lesions, as well as symptoms like fever, body aches, and swollen lymph nodes. It spreads primarily through close contact with infected individuals or contaminated surfaces. Though similar to smallpox, monkeypox is generally less severe, yet early detection remains critical for effective treatment and prevention.',
      metrics: {
        mortalityRate: 70,
        transmissionRate: 50,
        incubationPeriod: 85,
        recoveryRate: 90
      }
    },
    actinicKeratosis: {
      id: 'actinicKeratosis',
      title: 'Actinic Keratosis',
      image: require('../../assets/images/actinickeratosis.jpg'),
      about: 'Actinic keratosis is a rough, scaly patch on the skin that develops from years of sun exposure. It\'s considered a precancerous condition because it can develop into skin cancer. These lesions typically appear on sun-exposed areas like face, lips, ears, scalp, neck, forearms and backs of hands. Early treatment is important to prevent progression to squamous cell carcinoma.',
      metrics: {
        mortalityRate: 20,
        transmissionRate: 30,
        incubationPeriod: 40,
        recoveryRate: 95
      }
    },
    basalcellcarcinoma: {
        id: 'basalcellcarcinoma',
        title: 'Basal Cell Carcinoma',
        image: require('../../assets/images/basal.jpg'),
        about: 'Basal cell carcinoma is the most common type of skin cancer. It begins in the basal cells - a type of cell within the skin that produces new skin cells as old ones die off. It often appears as a waxy bump, though it can take other forms. Basal cell carcinoma occurs most often on areas of the skin that are exposed to the sun, such as your face and neck. While this cancer rarely spreads to other parts of the body, it can be disfiguring if not treated promptly. Early diagnosis and treatment are important to prevent the cancer from growing deep into the skin.',
        metrics: {
          mortalityRate: 20,
          transmissionRate: 30,
          incubationPeriod: 40,
          recoveryRate: 95
        }
      },
    benign: {
      id: 'benign',
      title: 'Benign Keratosis',
      image: require('../../assets/images/benign.jpg'),
      about: 'Benign keratosis, also known as seborrheic keratosis, is a non-cancerous skin growth that commonly appears during middle age. These growths often look like warts, ranging in color from light tan to black, and have a waxy, scaly, slightly raised appearance. While they can sometimes be cosmetically concerning, they are completely harmless and do not require treatment unless they become irritated or you want them removed for aesthetic reasons. They commonly appear on the face, chest, shoulders, and back.',
      metrics: {
        mortalityRate: 10,
        transmissionRate: 20,
        incubationPeriod: 30,
        recoveryRate: 95
      }
    },
    chickenpox: {
      id: 'chickenpox',
      title: 'Chickenpox',
      image: require('../../assets/images/chickenpox.jpg'),
      about: 'Chickenpox is a highly contagious viral infection causing an itchy rash with small, fluid-filled blisters. It is most common in children but can affect anyone who has not had the infection or been vaccinated.',
      metrics: {
        mortalityRate: 15,
        transmissionRate: 90,
        incubationPeriod: 60,
        recoveryRate: 98
      }
    },
    cowpox: {
      id: 'cowpox',
      title: 'Cowpox',
      image: require('../../assets/images/cowpox.jpg'),
      about: 'Cowpox is a skin disease caused by a virus that primarily affects cattle but can be transmitted to humans. It typically causes red, painful sores and is historically significant as the basis for the first vaccine.',
      metrics: {
        mortalityRate: 5,
        transmissionRate: 30,
        incubationPeriod: 45,
        recoveryRate: 99
      }
    },
    dermatofibroma: {
      id: 'dermatofibroma',
      title: 'Dermatofibroma',
      image: require('../../assets/images/derma.jpg'),
      about: 'Dermatofibroma is a common, harmless skin growth that appears as a hard, raised bump, usually on the legs. It is typically brown, red, or pink in color and may be tender when touched.',
      metrics: {
        mortalityRate: 0,
        transmissionRate: 0,
        incubationPeriod: 0,
        recoveryRate: 100
      }
    },
    hfmd: {
      id: 'hfmd',
      title: 'HFMD',
      image: require('../../assets/images/hfmd.jpg'),
      about: 'Hand, foot, and mouth disease (HFMD) is a viral infection causing sores in the mouth and a rash on hands and feet. It primarily affects children but can occur in adults.',
      metrics: {
        mortalityRate: 5,
        transmissionRate: 85,
        incubationPeriod: 70,
        recoveryRate: 98
      }
    },
    measles: {
      id: 'measles',
      title: 'Measles',
      image: require('../../assets/images/measles.jpg'),
      about: 'Measles is a highly contagious viral infection that causes a distinctive rash and fever. It can be serious and even fatal for small children.',
      metrics: {
        mortalityRate: 25,
        transmissionRate: 95,
        incubationPeriod: 75,
        recoveryRate: 97
      }
    },
    melanocyticNevus: {
      id: 'melanocyticNevus',
      title: 'Melanocytic Nevus',
      image: require('../../assets/images/melanocytic.jpg'),
      about: 'Melanocytic nevus, commonly known as a mole, is a benign growth of melanocytes. While most are harmless, changes in appearance can indicate melanoma.',
      metrics: {
        mortalityRate: 5,
        transmissionRate: 0,
        incubationPeriod: 0,
        recoveryRate: 100
      }
    },
    melanoma: {
      id: 'melanoma',
      title: 'Melanoma',
      image: require('../../assets/images/melanoma.jpg'),
      about: 'Melanoma is the most dangerous type of skin cancer. It develops in melanocytes and can spread to other parts of the body if not caught early.',
      metrics: {
        mortalityRate: 60,
        transmissionRate: 0,
        incubationPeriod: 50,
        recoveryRate: 85
      }
    },
    squamousCellCarcinoma: {
      id: 'squamousCellCarcinoma',
      title: 'Squamous Cell Carcinoma',
      image: require('../../assets/images/squamous.jpg'),
      about: 'Squamous cell carcinoma is the second most common form of skin cancer. It develops in the squamous cells and is usually caused by extensive sun exposure.',
      metrics: {
        mortalityRate: 25,
        transmissionRate: 0,
        incubationPeriod: 45,
        recoveryRate: 92
      }
    },
    vascularLesion: {
      id: 'vascularLesion',
      title: 'Vascular Lesion',
      image: require('../../assets/images/vascular.jpg'),
      about: 'Vascular lesions are abnormalities of blood vessels that can appear on or under the skin. They include various types like hemangiomas and port-wine stains.',
      metrics: {
        mortalityRate: 10,
        transmissionRate: 0,
        incubationPeriod: 0,
        recoveryRate: 90
      }
    }
  };

export type SkinLesionKey = keyof typeof skinLesionData;